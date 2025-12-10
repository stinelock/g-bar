"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";

export default function FormPost({ action }) {


  return (
    // Form uses Server Action passed as prop
    <form action={action} className="grid grid-cols-1 gap-4">
      <label htmlFor="name">Navn</label>
      <input
        id="name"
        name="name"
        type="text"
        aria-label="navn"
        placeholder="Fulde navn"
        defaultValue=""
      />
      <label htmlFor="phone">Mobil</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        defaultValue=""
        aria-label="telefonnummer"
        placeholder="Telefonnummer"
        onChange={(event) => setImage(event.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        defaultValue=""
        aria-label="e-mail"
        placeholder="E-mail"
        onChange={(event) => setImage(event.target.value)}
      />
      <label htmlFor="comments">Kommentarer</label>
      <input
        type="text"
        name="comments"
        id="comments"
        defaultValue=""
        aria-label="skriv eventuelle kommentarer"
        placeholder="Skriv eventuelle kommentarer"
        onChange={(event) => setImage(event.target.value)}
      />
      <div className="flex flex-row gap-4 items-center mt-4">
        <input
          type="checkbox"
          id="confirmationtext"
          name="confirmationtext"
          value="SMS"
          className="aspect-square w-8 accent-dark-purple"
        />
        <label htmlFor="confirmationtext"> Jeg ønsker bekræftelse på SMS</label>
      </div>
      <div className="flex flex-row gap-4 items-center mb-10">
        <input
          type="checkbox"
          id="confirmationmail"
          name="confirmationmail"
          value="Mail"
          className="aspect-square w-8 accent-dark-purple"
        />
        <label htmlFor="confirmationmail"> Jeg ønsker bekræftelse på mail</label>
      </div>

      <div>
        <CTAButton text="BEKRÆFT BOOKING" type="submit" />
      </div>
    </form>
  );
}
