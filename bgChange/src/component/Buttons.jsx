export default function Buttons({ setColor }) {
  return (
    <>
      <button
        className="m-5 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
        onClick={() => {
          setColor("grey");
        }}
      >
        grey
      </button>
      <button className="ml-5items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
      onClick={() => {
        setColor("red");
      }}>
        red
      </button>
      <button className="ml-5 items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
      onClick={() => {
        setColor("yellow");
      }}>
        yellow
      </button>
      <button className="ml-5 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
      onClick={() => {
        setColor("green");
      }}>
        green
      </button>
      <button className="ml-5 items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10" 
      onClick={() => {
        setColor("blue");
      }}>
        blue
      </button>
      <button className="ml-5 items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
      onClick={() => {
        setColor("indigo");
      }}>
        indigo
      </button>
      <button className="ml-5 items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
      onClick={() => {
        setColor("purple");
      }}>
        purple
      </button>
      <button className="ml-5 items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
      onClick={() => {
        setColor("pink");
      }}>
        pink
      </button>
    </>
  );
}
