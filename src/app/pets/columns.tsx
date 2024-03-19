"use client"

import { ColumnDef } from "@tanstack/react-table"
// columns.tsx

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Pet = {
  id: number; // Changed to number based on the provided data
  adopted: string | null;
  dog_name: string | null;
  aga_number: string | null;
  date_in_program: string | null;
  age: string | null;
  sex: string | null;
  veterinarian: string | null;
  foster: string | null;
  foster2: string | null;
  foster3: string | null;
  readyforfoster: string | null;
  phone_number: string | null;
  agarep: string | null;
  visits: string | null;
  comments: string | null;
  criticalinfo: string | null;
  otiowner: string | null;
  otishelter: string | null;
  shelter: string | null;
  gp: string | null;
  mix: string | null;
  mix_other: string | null;
  heartworms: string | null;
  heartworms_1st: string | null;
  heartworms_2nd: string | null;
  spay_neuter_date: string | null;
  chipnum: string | null;
  medinfo: string | null;
  adoptedby: string | null;
  adopteddate: string | null;
  chipregistered: string | null;
  chipverifiedby: string | null;
  DateInF1: string | null;
  DateOutF1: string | null;
  DateInF2: string | null;
  DateOutF2: string | null;
  DateInF3: string | null;
  DateOutF3: string | null;
  DateLeftVet: string | null;
  ReturnDate1: string | null;
  ReturnDate2: string | null;
  date_in_program2: string | null;
  former_aga_number: string | null;
  behaviorinfo: string | null;
  followup: string | null;
  traininginfo: string | null;
  FollowupDate: string | null;
  FollowupVet: string | null;
  FollowupConfirmed: string | null;
  FollowupDate2: string | null;
  FollowupVet2: string | null;
  FollowupConfirmed2: string | null;
  Medications: string | null;
  MedicationsRefills: string | null;
  adoptedby2: string | null;
  adopteddate2: string | null;
  former_date_in_program: string | null;
  medical_rep: string | null;
  other_rescue: string | null;
  rainbow_bridge: string | null;
  aga_trainer: string | null;
  agareturn: string | null;
  location: string | null;
  osid: number | null;
  agaarepID: number | null;
};


export const columns: ColumnDef<Pet>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: info => info.getValue() || 'N/A', // Default display for null values
  },
  {
    accessorKey: "adopted",
    header: "Adopted",
  },
  {
    accessorKey: "dog_name",
    header: "Dog Name",
  },
  {
    accessorKey: "aga_number",
    header: "AGA Number",
  },
  {
    accessorKey: "date_in_program",
    header: "Date in Program",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "sex",
    header: "Sex",
  },
  {
    accessorKey: "veterinarian",
    header: "Veterinarian",
  },
  {
    accessorKey: "foster",
    header: "Foster",
  },
  {
    accessorKey: "foster2",
    header: "Foster 2",
  },
  {
    accessorKey: "foster3",
    header: "Foster 3",
  },
  {
    accessorKey: "readyforfoster",
    header: "Ready for Foster",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "agarep",
    header: "AGA Rep",
  },
  {
    accessorKey: "visits",
    header: "Visits",
  },
  {
    accessorKey: "comments",
    header: "Comments",
  },
  {
    accessorKey: "criticalinfo",
    header: "Critical Info",
  },
  {
    accessorKey: "otiowner",
    header: "OTI Owner",
  },
  {
    accessorKey: "otishelter",
    header: "OTI Shelter",
  },
  {
    accessorKey: "shelter",
    header: "Shelter",
  },
  {
    accessorKey: "gp",
    header: "GP",
  },
  {
    accessorKey: "mix",
    header: "Mix",
  },
  {
    accessorKey: "mix_other",
    header: "Mix Other",
  },
  {
    accessorKey: "heartworms",
    header: "Heartworms",
  },
  {
    accessorKey: "heartworms_1st",
    header: "Heartworms 1st",
  },
  {
    accessorKey: "heartworms_2nd",
    header: "Heartworms 2nd",
  },
  {
    accessorKey: "spay_neuter_date",
    header: "Spay Neuter Date",
  },
  {
    accessorKey: "chipnum",
    header: "Chip Number",
  },
  {
    accessorKey: "medinfo",
    header: "Medical Info",
  },
  {
    accessorKey: "adoptedby",
    header: "Adopted By",
  },
  {
    accessorKey: "adopteddate",
    header: "Adopted Date",
  },
  {
    accessorKey: "chipregistered",
    header: "Chip Registered",
  },
  {
    accessorKey: "chipverifiedby",
    header: "Chip Verified By",
  },
  {
    accessorKey: "DateInF1",
    header: "Date In F1",
  },
  {
    accessorKey: "DateOutF1",
    header: "Date Out F1",
  },
  {
    accessorKey: "DateInF2",
    header: "Date In F2",
  },
  {
    accessorKey: "DateOutF2",
    header: "Date Out F2",
  },
  {
    accessorKey: "DateInF3",
    header: "Date In F3",
  },
  {
    accessorKey: "DateOutF3",
    header: "Date Out F3",
  },
  {
    accessorKey: "DateLeftVet",
    header: "Date Left Vet",
  },
  {
    accessorKey: "ReturnDate1",
    header: "Return Date 1",
  },
  {
    accessorKey: "ReturnDate2",
    header: "Return Date 2",
  },
  {
    accessorKey: "date_in_program2",
    header: "Date in Program 2",
  },
  {
    accessorKey: "former_aga_number",
    header: "Former AGA Number",
  },
  {
    accessorKey: "behaviorinfo",
    header: "Behavior Info",
  },
  {
    accessorKey: "followup",
    header: "Follow-Up",
  },
  {
    accessorKey: "traininginfo",
    header: "Training Info",
  },
  {
    accessorKey: "FollowupDate",
    header: "Follow-Up Date",
  },
  {
    accessorKey: "FollowupVet",
    header: "Follow-Up Vet",
  },
  {
    accessorKey: "FollowupConfirmed",
    header: "Follow-Up Confirmed",
  },
  {
    accessorKey: "FollowupDate2",
    header: "Follow-Up Date 2",
  },
  {
    accessorKey: "FollowupVet2",
    header: "Follow-Up Vet 2",
  },
  {
    accessorKey: "FollowupConfirmed2",
    header: "Follow-Up Confirmed 2",
  },
  {
    accessorKey: "Medications",
    header: "Medications",
  },
  {
    accessorKey: "MedicationsRefills",
    header: "Medications Refills",
  },
  {
    accessorKey: "adoptedby2",
    header: "Adopted By 2",
  },
  {
    accessorKey: "adopteddate2",
    header: "Adopted Date 2",
  },
  {
    accessorKey: "former_date_in_program",
    header: "Former Date In Program",
  },
  {
    accessorKey: "medical_rep",
    header: "Medical Rep",
  },
  {
    accessorKey: "other_rescue",
    header: "Other Rescue",
  },
  {
    accessorKey: "rainbow_bridge",
    header: "Rainbow Bridge",
  },
  {
    accessorKey: "aga_trainer",
    header: "AGA Trainer",
  },
  {
    accessorKey: "agareturn",
    header: "AGA Return",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "osid",
    header: "OSID",
  },
  {
    accessorKey: "agaarepID",
    header: "AGA Rep ID",
  },
];
