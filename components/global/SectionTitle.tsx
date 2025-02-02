import { Separator } from '@/components/ui/separator';

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold leading-none md:text-[40px] mb-2">
        {text}
      </h2>
      <Separator />
    </div>
  );
}
export default SectionTitle;