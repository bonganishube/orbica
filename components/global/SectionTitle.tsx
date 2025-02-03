function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold capitalize leading-none md:text-[40px] mb-2">
        {text}
      </h2>
    </div>
  );
}
export default SectionTitle;