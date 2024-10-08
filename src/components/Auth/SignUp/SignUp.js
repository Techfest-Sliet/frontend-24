import { useState } from "react";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Loader/loader.js";
// import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import StarCanvas from "../../../screens/landingPage/StarbackGround.jsx";
import { baseUrl } from "../../../API/api.js";

const departments = await fetch(`${baseUrl}/departments`).then((v) => v.json()).then(Object.entries);


const Signup = () => {
    // const { executeRecaptcha } = useGoogleReCaptcha();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regNo, setRegNo] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const [dob, setDob] = useState(null);
    const [profession, setProfession] = useState();
    const [department, setDepartment] = useState("0");
    const [confirm_err, setConfirmErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorsMade, setErrorsMade] = useState(null);
    const [fieldErr, setFieldErr] = useState(null);
    const [departmentErr, setDepartmentErr] = useState(null);
    const [mailErr, setMailErr] = useState(null);
    const [regNoErr, setRegNoErr] = useState(null);
    const [passwordErr, setPasswordErr] = useState(null);
    const [phoneErr, setPhoneErr] = useState(null);
    const [divOne, setDivOne] = useState(true);
    const [divTwo, setDivTwo] = useState(false);
    const [errorMade, setErrorMade] = useState();
    const [cpError, setCpError] = useState();

    const onErrorMadeHandle = () => {
        setErrorMade(null);
    };

    let stringArray = name.split(/(\s+)/);

    const navigate = useNavigate();

    const handleConfirm = (value) => {
        setCPassword(value);
        if (!(value === password)) {
            setConfirmErr("Password should match");
        } else {
            setConfirmErr(null);
            return true;
        }
        return false;
    };

    const showDivTwo = () => {
        if (
            email.trim().length === 0 &&
            password.trim().length === 0 &&
            name.trim().length === 0 &&
            cPassword.trim().length === 0
        ) {
            setFieldErr("Field(s) should not be empty");
            setTimeout(() => {
                setFieldErr(null);
            }, 3000);
            return;
        }
        if (name.trim().length === 0) {
            setFieldErr("Field(s) should not be empty");
            setTimeout(() => {
                setFieldErr(null);
            }, 3000);
            return;
        }
        if (!email.trim().includes("@")) {
            setMailErr("Invalid mail!");
            setTimeout(() => {
                setMailErr(null);
            }, 3000);
            return;
        }
        if (cPassword.trim().length === 0) {
            setCpError("Please fill the confirm password.");
            setTimeout(() => {
                setCpError(null);
            }, 3000);
            return;
        }
        if (password.length < 5) {
            setPasswordErr("Atleast five characteres!");
            setTimeout(() => {
                setPasswordErr(null);
            }, 3000);
            return;
        } else {
            setDivOne(false);
            setDivTwo(true);
        }
    };
    const showDivOne = () => {
        setDivOne(true);
        setDivTwo(false);
    };

    const PostData = async (e) => {
        // if (!executeRecaptcha) {
        //   // console.log('Execute recaptcha not yet available');
        //   return;
        // }

        // const token = await executeRecaptcha("signUp");
        e.preventDefault();

        if (email.trim().length === 0) {
            setFieldErr("Field should not be empty");
            setTimeout(() => {
                setFieldErr(null);
            }, 3000);
            return;
        }
        if (college.trim().length === 0) {
            setFieldErr("Field should not be empty");
            setTimeout(() => {
                setFieldErr(null);
            }, 3000);
            return;
        }
        if (password.trim().length === 0) {
            setFieldErr("Field should not be empty");
            setTimeout(() => {
                setFieldErr(null);
            }, 3000);
            return;
        }
        if (cPassword.trim().length === 0) {
            setFieldErr("Field should not be empty");
            setTimeout(() => {
                setFieldErr(null);
            }, 3000);
            return;
        }
        if (name.trim().length === 0) {
            setFieldErr("Field should not be empty");
            setTimeout(() => {
                setFieldErr(null);
            }, 3000);
        }
        if (!email.trim().includes("@")) {
            setMailErr("Invalid mail!");
            setTimeout(() => {
                setMailErr(null);
            }, 3000);
            return;
        }
        if (department === "0") {
            setDepartmentErr("Please choose your department");
            setTimeout(() => {
                setDepartmentErr(null);
            }, 3000);
            return;
        }
        if (!regNo.length) {
            setRegNoErr("Please choose your branch");
            setTimeout(() => {
                setRegNoErr(null);
            }, 3000);
            return;
        }

        if (password.length < 5) {
            setPasswordErr("Atleast five characteres!");
            setTimeout(() => {
                setPasswordErr(null);
            }, 3000);
            return;
        }
        if (phone.length < 10) {
            setPhoneErr("Invalid phone number!");
            setTimeout(() => {
                setPhoneErr(null);
            }, 3000);
            return;
        }
        if (phone.length > 10) {
            setPhoneErr("Invalid phone number!");
            setTimeout(() => {
                setPhoneErr(null);
            }, 3000);
            return;
        }
        if (dob.length === 0) {
            setFieldErr("Field(s) should not be empty.");
        }

        const user = {
            name: name,
            email: email,
            password: password,
            phone: Number(phone),
            dept: department,
            college: college,
            dob: dob,
            profession: profession,
            reg_no: regNo,
            // reCaptchaToken: token,
        };
        setIsLoading(true);
        fetch
            (`${baseUrl}/auth/student/sign_up`, {
                method: "POST",
                credentials: "include",
                body: new URLSearchParams(user),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }) //needed to be updated
            .then((result) => {
                const res = result;
                setIsLoading(false);
                if (res.status === 200) {
                    setErrorMade({
                        title: "Registered!",
                        message: "Kindly check your inbox/spam for verification mail!",
                    });
                    setTimeout(() => {
						window.location = "/user";
                    }, 3000);
                } else {
                    setIsLoading(false);
                    setTimeout(() => {
                        navigate("/sign-in");
                        setErrorsMade(null);
                    }, 3000);
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err)
                return;
            });
    };

    return (
        <>
            <StarCanvas />
            {isLoading && <Loader />}

            <div
                className={styles.signup__content}
                style={{ position: "relative", zIndex: "25" }}
            >
                <div>
                    <img
                        src="/logo.png"
                        alt="techFest'23"
                        className={styles.signup__logo}
                    />
                </div>

                <form method="post" className={styles.signup__inputFields} action={`${baseUrl}/auth/student/sign_up`}>
                    <h1 className={styles.signup__title}>{!stringArray[0] ? "Registering to techFEST SLIET" : `Hi ${stringArray[0]}!`}</h1>
                    {divTwo && (
                        <div className={styles.signup__page2}>
                            {errorsMade && <p style={{ color: "red" }}>{errorsMade}</p>}

                            {{ fieldErr } && <p style={{ color: "red" }}>{fieldErr}</p>}
                            <label htmlFor="phone" className={styles.signup__label}>
                                Whatsapp Number
                            </label>
                            {phoneErr && (
                                <p style={{ color: "red", fontSize: "1rem" }}>{phoneErr}</p>
                            )}
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                placeholder="Enter your whatsapp number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                autoComplete="off"
                            />
                            {departmentErr && <p style={{ color: "red" }}>{departmentErr}</p>}
                            <select
                                className={styles.signup__select}
                                sx={{ height: "20px" }}
                                onChange={(e) => setDepartment(e.target.value)}
                                id="department"
                                name="department"
                                value={department}
                                required
                            >
                                <option value="0">Department Enrolled</option>
                                {departments.map((e) => <><option value={e[0]}>{e[1]}</option></>)}
                            </select>
                            <label htmlFor="collegeName" className={styles.signup__label}>
                                College Name
                            </label>
                            <input
                                type="text"
                                id="collegeName"
                                name="collegeName"
                                placeholder="Enter your college name"
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="dob" className={styles.signup__label}>
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                placeholder="dd-mm-yyyy"
                                value={dob}
                                onChange={(e) => { console.log(e.target.value); setDob(e.target.value) }}
                                required
                                autoComplete="off"
                            />

                            <button
                                className={styles.signup__button}
                                value="signUp"
                                type="button"
                                onClick={PostData}
                                disabled={isLoading}
                            >
                                Sign Up
                            </button>
                            <p className={styles.signup__text}>
                                Alter previous data?
                                <span className={styles.signin__link} onClick={showDivOne}>
                                    Back
                                </span>
                            </p>
                        </div>
                    )}

                    {divOne && (
                        <div>
                            {/* <h1 className={styles.signup__title}>Welcome!</h1> */}
                            <div className={styles.signup__page1}>
                                {{ fieldErr } && <p style={{ color: "red" }}>{fieldErr}</p>}
                                <label htmlFor="name" className={styles.signup__label}>
                                    NAME*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="email" className={styles.signup__label}>
                                    EMAIL*
                                </label>
                                {mailErr && <p style={{ color: "red" }}>{mailErr}</p>}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="reg_no" className={styles.signup__label}>
                                    REGISTERATION NUMBER*
                                </label>
                                {regNoErr && <p style={{ color: "red" }}>{regNoErr}</p>}
                                <input
                                    type="reg_no"
                                    id="reg_no"
                                    name="reg_no"
                                    placeholder="Enter your reg_no"
                                    value={regNo}
                                    onChange={(e) => setRegNo(e.target.value)}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="password" className={styles.signup__label}>
                                    PASSWORD*
                                </label>
                                {{ passwordErr } && (
                                    <p style={{ color: "red" }}>{passwordErr}</p>
                                )}
                                <input
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="cpassword" className={styles.signup__label}>
                                    CONFIRM PASSWORD*
                                </label>
                                {{ confirm_err } && (
                                    <p style={{ color: "red" }}>{confirm_err}</p>
                                )}
                                {cpError && (
                                    <p style={{ color: "red" }}>{cpError}</p>
                                )}
                                <input
                                    value={cPassword}
                                    placeholder="Confirm your password"
                                    variant="standard"
                                    onChange={(e) => handleConfirm(e.target.value)}
                                    type="password"
                                    autoComplete="off"
                                />
                                <button
                                    className={styles.signup__button}
                                    value="next"
                                    type="button"
                                    onClick={showDivTwo}
                                    disabled={isLoading}
                                    autoComplete="off"
                                >
                                    Next
                                </button>

                                <p className={styles.signup__text}>
                                    Already have an account?{" "}
                                    <Link to="/sign-in">
                                        <span className={styles.signin__link}>Sign In</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </>
    );
};
export default Signup;
