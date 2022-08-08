import { useRouter } from "next/router";
import titleCase from "../../constants/titleCase";
import axios from "axios";
import GestationalLimits from "../../components/GestationalLimits";
import InsuranceCoverage from "../../components/InsuranceCoverage";
import {
  token,
  gestationalLimitsTableURL,
  insuranceCoverageTableURL,
} from "../../constants/tableEndpoints";
import styles from "../../styles/State.module.css";
import Link from "next/link";

export const getServerSideProps = async ({ params }) => {
  // console.log("Uncapped params:", params);
  // console.log("Params from URL: ", titleCase(params.state));
  const state = titleCase(params.state);

  const gestLimits = await axios.get(`${gestationalLimitsTableURL}/${state}`, {
    headers: {
      token: `${token}`,
    },
  });

  const insuranceCov = await axios.get(
    `${insuranceCoverageTableURL}/${state}`,
    {
      headers: {
        token: `${token}`,
      },
    }
  );

  // console.log("Return from API:", gestLimits.data);

  return {
    props: { gestData: gestLimits.data, insuranceData: insuranceCov.data },
  };
};

const State = (props) => {
  // debugger;
  // console.log("gestData destructured from props:", props);
  const router = useRouter();
  const stateNameFromUrl = router.query.state;
  const stateName = titleCase(stateNameFromUrl);

  return (
    <div className={styles.state_container}>
      <div className={styles.state_wrapper}>
        <div className={styles.intro_wrapper}>
          <div className={styles.title}>{stateName} Abortion Laws </div>

          <div className={styles.rightsection}>
            <div className={styles.small_title}>Providing Clarity</div>
            <div>
              Here we break down state rulings about gestational limits,
              insurance coverage, and more.
            </div>
          </div>
        </div>

        <section>
          <div className={styles.small_title}>Gestational Limits</div>

          <div className={styles.note_section}>
            <div className={styles.note_label}>Definition/Note:</div>

            <div className={styles.note}>
              Gestational limits determined by each state impose a cutoff
              (commonly weeks after a pregnant person&apos;s last menstrual
              period) when abortion is no longer allowed.
            </div>
          </div>
          <GestationalLimits state={stateName} stats={props.gestData} />
        </section>

        <section>
          <div className={styles.small_title}>
            State Restrictions on Health Insurance Coverage of Abortion
          </div>

          <div className={styles.note_section}>
            <div className={styles.note_label}>Definition/Note:</div>

            <div className={styles.note}>
              <p>
                Many states have passed laws that restrict health insurance
                coverage of abortions—this may include Medicaid, private, and
                state Marketplace plans (available with the passage of the{" "}
                <Link href="https://www.healthcare.gov/glossary/affordable-care-act">
                  <a target="_blank">Affordable Care Act</a>
                </Link>{" "}
                in 2010).
              </p>
              <p>
                Below, private health insurance refers to plans *regulated by
                the state*. State restrictions on abortion coverage do not apply
                to self-insured plans (commonly when the employer takes on all
                the risk versus contracting with a health insurer) versus
                self-insured plans regulated at the federal level.
              </p>
              <p>
                The Hyde Amendment (originally passed in 1977 after the 1973’s
                Roe v. Wade Supreme Court Decision) bars federal dollars to be
                used to cover abortions, with exceptions to save the life of a
                pregnant person and when a pregnancy results from rape or
                incest.
              </p>
              <p>
                Since the ACA passage in 2010, many antiabortion conservatives
                have helped pass restrictions on private health insurance that
                are more restrictive than the Hyde limitations and banned
                abortion coverage completely from state Marketplace plans.
              </p>
            </div>
          </div>
          <InsuranceCoverage state={stateName} stats={props.insuranceData} />
        </section>
      </div>
    </div>
  );
};

export default State;
