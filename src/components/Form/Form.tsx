import React, { useState } from "react";
import axios from "axios";

function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok: any, msg: any, form: any) => {
    setServerState({
      submitting: false,
      status: { ok, msg } as any,
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, status: null });
    console.log(new FormData(form).getAll("name"));
    axios({
      method: "post",
      url: "https://formspree.io/f/mrgydynv",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div style={{ display: "flex" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="subject">Betreff</label>
        <input id="subject" type="submit" name="subject" required />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!(serverState.status as any).ok ? "errorMsg" : ""}>{(serverState.status as any).msg}</p>
        )}
      </form>
    </div>
  );
}

export default MyForm;
