interface Guest {
  id: number;
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  address3: string;
  town: string;
  county: string;
  postcode: string;
  starter: number;
  main: number;
  pudding: number;
  songChoice: string;
  rsvpd: boolean;
  rsvpAnswer: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default Guest;