"use client";

import { useRef } from "react";
import MotionBtn from "../common/MotionBtn";

export default function MailForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendMailHandler = async (e: any) => {
    e.preventDefault();
    if (
      !nameRef?.current?.value ||
      !mailRef?.current?.value ||
      !messageRef?.current?.value
    ) {
      return;
    }
    const req = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: mailRef.current.value,
        message: messageRef.current.value,
      }),
    });
    const res = await req.json();

    if (res.status === "ok") {
      nameRef.current.value = "";
      mailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <form onSubmit={sendMailHandler} className="form mail-form">
      <div className="form-wrap">
        <label htmlFor="name">Imię</label>
        <input type="text" id="name" name="name" ref={nameRef} />
      </div>
      <div className="form-wrap">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" ref={mailRef} />
      </div>
      <div className="form-wrap">
        <label htmlFor="message">Wiadomość</label>
        <textarea id="message" name="message" ref={messageRef} />
      </div>
      <MotionBtn>Wyślij</MotionBtn>
    </form>
  );
}
