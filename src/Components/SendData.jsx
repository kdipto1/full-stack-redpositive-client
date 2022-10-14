import React from "react";
import emailjs from "@emailjs/browser";

const SendData = () => {
  //
  const sendEmail = (e) => {
    const form = JSON.parse(localStorage.getItem("candidates"));
    emailjs
      .send(
        `process.env.SERVICE_ID`,
        `process.env.TEMPLATE_ID`,
        form,
        "syhdQC1of6CJwMBT7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <button className="btn btn-warning my-2" onClick={sendEmail}>
        Send
      </button>
    </>
  );
};

export default SendData;
