"use client";
import CTAButton from "./CTAButton";
import { useState } from "react";

export default function FormPost({ action }) {
    const [emailChecked, setEmailChecked] = useState(false);
    const [smsChecked, setSmsChecked] = useState(false);

    function handleCheckboxChange (event){
        const { name, checked } = event.target;
        
        if (name === 'confirmationmail') {
            setEmailChecked(checked);
        } else if (name === 'confirmationtext') {
            setSmsChecked(checked);
        }
    }

  return (
    // Form uses Server Action passed as prop
    <form action={action} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col">
        <label htmlFor="name">Navn</label>
        <input
          id="name"
          name="name"
          type="text"
          aria-label="navn"
          placeholder="Fulde navn"
          defaultValue=""
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">Mobil</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          defaultValue=""
          aria-label="telefonnummer"
          placeholder="Telefonnummer"
          minLength={8}
          maxLength={8}
          required={smsChecked}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue=""
          aria-label="e-mail"
          placeholder="E-mail"
          required={emailChecked}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="comments">Kommentarer</label>
        <input
          type="text"
          name="comments"
          id="comments"
          defaultValue=""
          aria-label="skriv eventuelle kommentarer"
          placeholder="Skriv eventuelle kommentarer"
        />
      </div>
      <div className="flex flex-row gap-4 items-center mt-4 md:mt-0 md:mb-10">
        <input
          type="checkbox"
          id="confirmationtext"
          name="confirmationtext"
          value="SMS"
          className="aspect-square w-8 accent-dark-purple"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="confirmationtext"> Jeg ønsker bekræftelse på SMS</label>
      </div>
      <div className="flex flex-row gap-4 items-center mb-10 md:mb-10">
        <input
          type="checkbox"
          id="confirmationmail"
          name="confirmationmail"
          value="Mail"
          className="aspect-square w-8 accent-dark-purple"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="confirmationmail">Jeg ønsker bekræftelse på mail</label>
      </div>

      <div>
        <CTAButton text="BEKRÆFT BOOKING" type="submit" />
      </div>
    </form>
  );
}
