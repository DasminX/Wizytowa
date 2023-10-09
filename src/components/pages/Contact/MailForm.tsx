"use client";

import { useRef } from "react";
import MotionBtn from "../../shared/MotionBtn";

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
    <form
      onSubmit={sendMailHandler}
      className="max-w-2xl flex flex-col items-center p-4 mx-auto border-2 border-dashed border-secondary-color rounded-3xl"
    >
      <div className="flex flex-col items-center justify-center w-[90%] mb-8">
        <label className="text-xl font-semibold mb-2" htmlFor="name">
          Imię
        </label>
        <input
          className="transite-colors w-3/5 p-2 text-primary-color bg-main-bg border-2 border-secondary-color rounded-lg"
          type="text"
          id="name"
          name="name"
          ref={nameRef}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[90%] mb-8">
        <label className="text-xl font-semibold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="transite-colors w-3/5 p-2 text-primary-color bg-main-bg border-2 border-secondary-color rounded-lg"
          type="email"
          id="email"
          name="email"
          ref={mailRef}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[90%] mb-8">
        <label className="text-xl font-semibold mb-2" htmlFor="message">
          Wiadomość
        </label>
        <textarea
          className="transite-colors w-full p-2 text-primary-color bg-main-bg border-2 border-secondary-color rounded-lg min-w-1/2 max-w-full min-h-[5rem] max-h-[15rem] resize"
          id="message"
          name="message"
          ref={messageRef}
        />
      </div>
      <MotionBtn>Wyślij</MotionBtn>
    </form>
  );
}
