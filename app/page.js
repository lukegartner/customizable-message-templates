import MessageConstructor from "@/components/MessageConstructor";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-4 mt-2 text-center text-primary">
        Customizable Message Templates
      </h1>
      <MessageConstructor />
    </div>
  );
};

export default HomePage;
