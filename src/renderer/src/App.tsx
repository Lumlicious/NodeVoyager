import { Button } from '@/components/ui/button';

function App(): React.JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <Button variant="outline">Button</Button>
      </h1>
    </>
  );
}

export default App;
