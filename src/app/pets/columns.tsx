'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// columns.tsx

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Pet = {
  id: number; // Changed to number based on the provided data
  adopted: string | null;
  dog_name: string | null;
  aga_number: string | null;
  date_in_program: Date | null;
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
    accessorKey: 'ID',
    // header: 'DB ID',
    cell: (info) => info.getValue() || 'N/A', // Default display for null values
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          DB ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'adopted',
    header: 'Adopted',
  },
  {
    accessorKey: 'dog_name',
    header: 'Dog Name',
  },
  {
    accessorKey: 'aga_number',
    header: 'AGA Number',
  },
  {
    accessorKey: 'date_in_program',
    header: 'Date in Program',
  },
  {
    accessorKey: 'date_in_program2',
    // header: 'Date in Program 2',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date in Program 2
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'sex',
    header: 'Sex',
  },
  {
    accessorKey: 'veterinarian',
    header: 'Veterinarian',
  },
  {
    accessorKey: 'foster',
    header: 'Foster',
  },
  {
    accessorKey: 'foster2',
    // header: 'Foster 2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'foster3',
    // header: 'Foster 3',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'readyforfoster',
    // header: 'Ready for Foster',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'phone_number',
    header: 'Phone Number',
  },
  {
    accessorKey: 'agarep',
    header: 'AGA Rep',
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    cell: ({ row }) => {
      return <div className="min-w-[35rem]">{row.original.visits}</div>;
    },
  },
  {
    accessorKey: 'comments',
    header: 'Comments',
    cell: ({ row }) => {
      return <div className="min-w-[35rem]">{row.original.comments}</div>;
    },
  },
  {
    accessorKey: 'criticalinfo',
    header: 'Critical Info',
    cell: ({ row }) => {
      return <div className="min-w-[35rem]">{row.original.criticalinfo}</div>;
    },
  },
  {
    accessorKey: 'otiowner',
    // header: 'OTI Owner',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'otishelter',
    // header: 'OTI Shelter',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'shelter',
    header: 'Shelter',
  },
  {
    accessorKey: 'gp',
    // header: 'GP',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'mix',
    // header: 'Mix',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'mix_other',
    // header: 'Mix Other',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'heartworms',
    // header: 'Heartworms',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'heartworms_1st',
    // header: 'Heartworms 1st',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'heartworms_2nd',
    // header: 'Heartworms 2nd',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'spay_neuter_date',
    header: 'Spay Neuter Date',
  },
  {
    accessorKey: 'chipnum',
    header: 'Chip Number',
  },
  {
    accessorKey: 'medinfo',
    header: 'Medical Info',
    cell: ({ row }) => {
      return <div className="min-w-[35rem]">{row.original.medinfo}</div>;
    },
  },
  {
    accessorKey: 'adoptedby',
    header: 'Adopted By',
  },
  {
    accessorKey: 'adopteddate',
    header: 'Adopted Date',
  },
  {
    accessorKey: 'chipregistered',
    // header: 'Chip Registered',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'chipverifiedby',
    // header: 'Chip Verified By',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'DateInF1',
    // header: 'Date In F1',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'DateOutF1',
    // header: 'Date Out F1',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'DateInF2',
    // header: 'Date In F2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'DateOutF2',
    // header: 'Date Out F2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'DateInF3',
    // header: 'Date In F3',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'DateOutF3',
    // header: 'Date Out F3',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'DateLeftVet',
    // header: 'Date Left Vet',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'ReturnDate1',
    // header: 'Return Date 1',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'ReturnDate2',
    // header: 'Return Date 2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'former_aga_number',
    // header: 'Former AGA Number',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'behaviorinfo',
    // header: 'Behavior Info',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'followup',
    // header: 'Follow-Up',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'traininginfo',
    // header: 'Training Info',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'FollowupDate',
    // header: 'Follow-Up Date',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'FollowupVet',
    // header: 'Follow-Up Vet',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'FollowupConfirmed',
    // header: 'Follow-Up Confirmed',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'FollowupDate2',
    // header: 'Follow-Up Date 2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'FollowupVet2',
    // header: 'Follow-Up Vet 2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'FollowupConfirmed2',
    // header: 'Follow-Up Confirmed 2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'Medications',
    // header: 'Medications',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'MedicationsRefills',
    // header: 'Medications Refills',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'adoptedby2',
    // header: 'Adopted By 2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'adopteddate2',
    // header: 'Adopted Date 2',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'former_date_in_program',
    // header: 'Former Date In Program',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'medical_rep',
    // header: 'Medical Rep',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'other_rescue',
    // header: 'Other Rescue',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'rainbow_bridge',
    header: 'Rainbow Bridge',
  },
  {
    accessorKey: 'aga_trainer',
    // header: 'AGA Trainer',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'agareturn',
    // header: 'AGA Return',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'location',
    // header: 'Location',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'osid',
    // header: 'OSID',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
  {
    accessorKey: 'agaarepID',
    // header: 'AGA Rep ID',
    header: ({ column }) => {
      column.toggleVisibility(false);
    },
  },
];
