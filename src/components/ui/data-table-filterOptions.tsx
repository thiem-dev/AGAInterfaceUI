import { Input } from '@/components/ui/input';

export const FilterControls = ({ table, columnFilters }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by Dog Name..."
          value={
            (table.getColumn('dog_name')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('dog_name')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by AGA number..."
          value={
            (table.getColumn('aga_number')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('aga_number')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by Foster1 Name..."
          value={(table.getColumn('foster')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('foster')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by AGA Rep Name..."
          value={(table.getColumn('agarep')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('agarep')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Adopted? Y / N"
          value={(table.getColumn('adopted')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('adopted')?.setFilterValue(event.target.value)
          }
          className="max-w-xs"
        />
      </div>
    </div>
  );
};
