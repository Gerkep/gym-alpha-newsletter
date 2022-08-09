import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsletterForm = ({ status, message, onSubmitted }) => {

    const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onSubmitted({
        EMAIL: email,
    });
}

    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input className="border-2 border-gray-300 px-4 h-12 w-64 rounded-md" placeholder='Email' onChange={(e) => setEmail(e.target.value)} type="email" value={email}/>
          <input className="text-white bg-black w-36 h-12 rounded-md mt-4 md:ml-10 mb-2 font-bold cursor-pointer" type="submit" value="Join" formValues={[email]}/>
        </form>
      </div>
    );
};

export default NewsletterForm;