import { useState, useEffect } from "react";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";
const Contacts = () => {
  const contacts = useContacts();
  if (contacts.isLoading) {
    return <div>...loading</div>;
  }
  if (contacts.isError) {
    return <div>...error</div>;
  }

  return (
    <div>
      <ContactsTable data={contacts.data} />
    </div>
  );
};

export default Contacts;
