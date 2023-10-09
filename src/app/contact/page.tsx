import MailForm from "@/components/pages/Contact/MailForm";

export default function Page() {
  return (
    <>
      <section className="w-[90%] max-w-7xl mx-auto">
        <h1 className="text-center mt-12 mb-8">Napisz do mnie!</h1>
        <MailForm />
      </section>
    </>
  );
}
