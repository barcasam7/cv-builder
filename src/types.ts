export type Data = {
   name: string;
   title: string;
   introText: string;
   contact: Contact;
   skills: string[];
   highlights: string[];
};

export type Contact = {
   phone: string;
   email: string;
   address: string;
};

export type Colour = {
   highlight: string;
   text: string;
   background: string;
};

export type Experience = {
   title: string;
   company: string;
   location: string;
   date: string;
   description: string[];
};

export type Education = {
   title: string;
   university: string;
   location: string;
   date: string;
   description: string[];
};
