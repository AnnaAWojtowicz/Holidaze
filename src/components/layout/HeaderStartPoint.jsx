import React from "react";
import ButtonPrimary from "../Button";
import ModalMain from "./Modal";
import ModalRegisterSuccess from "../profile/ModalRegisterSuccess";


function HeaderStartPoint({ showModalLogin,
    handleShowLogin,
    handleCloseLogin,
    setEmail,
    setPassword,
    showModalSignup,
    handleShowSignup,
    handleCloseSignup,
    name,
    setName,
    email,
    password,
    role,
    setRole,
    registerUser,
    showSuccessModal,
    setIsSignIn,
    setShowModalLogin,
    setShowSuccessModal,
    loginUser }) {
    return (
        <div>
            <ButtonPrimary className="modalsInNav" name="Login" onClick={handleShowLogin} type="button" />
            <ModalMain
                showModalLogin={showModalLogin}
                handleCloseLogin={handleCloseLogin}
                isSignIn={true}
                onHide={() => setShowModalLogin(false)}
                setEmail={setEmail}
                setPassword={setPassword}
                email={email}
                password={password}
                role={role}
                loginUser={loginUser}

            />
            <ButtonPrimary name="Sign-up" onClick={handleShowSignup} type="button" />
            <ModalMain
                showModalSignup={showModalSignup}
                handleCloseSignup={handleCloseSignup}
                isSignIn={false}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                role={role}
                setRole={setRole}
                register={registerUser}
            />

            <ModalRegisterSuccess
                show={showSuccessModal}
                onHide={() => setShowSuccessModal(false)}
                role={role}
                setRole={setRole}
                setIsSignIn={setIsSignIn}
                setShowModalLogin={setShowModalLogin}
            />
        </div>
    );
}

export default HeaderStartPoint;