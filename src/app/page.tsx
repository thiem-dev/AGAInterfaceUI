import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the new AGA Interface / WebTool</h1>
      <a href="./dogList">Go search Dog List</a>
      <h2>Sample Link Below</h2>
      <Button variant="outline" className="bg-slate-300">
        <a href="/agaFiles/sample.pdf" target="blank" rel="noopener noreferrer">
          Download sample.pdf File
        </a>
      </Button>
    </div>
  );
}
