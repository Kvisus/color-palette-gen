import { useState } from "react";

function App() {
  const [currentPalette, setCurrentPalette] = useState<string[]>([]);
  const [savedPalettes, setSavedPalettes] = useState<string[][]>([]);

  const generateRandomColor = () => {
    let string = "#";

    for (let i = 0; i < 3; i++) {
      string += Math.floor(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");
    }

    return string;
  };

  const generatePalette = () => {
    const newPalette: string[] = Array.from({ length: 5 }, generateRandomColor);
    setCurrentPalette(newPalette);
  };

  const saveCurrentPalette = () => {
    const newPalette = [...savedPalettes, currentPalette];
    setSavedPalettes(newPalette);
  };

  const deletePalette = (index: number) => {
    const newSavedPalettes = savedPalettes.filter((_, i) => i !== index);
    setSavedPalettes(newSavedPalettes);
  };

  return (
    <div className="p-2">
      <div className="text-center">
        <button
          id="generate"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generatePalette}
        >
          Generate Color Pallete
        </button>
      </div>

      <div className="bg-gray-100 rounded-md p-2 mt-4">
        <div
          id="current-palette"
          className="flex flex-wrap mt-5 justify-center"
        >
          {currentPalette.map((color, index) => (
            <div
              key={index}
              className="color-block w-16 h-16 text-sm flex items-center justify-center m-1 hover:opacity-75 rounded-md"
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          {currentPalette.length > 0 && (
            <button
              id="save"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1"
              onClick={saveCurrentPalette}
            >
              Save Palette
            </button>
          )}
        </div>
      </div>

      <div id="saved-palettes" className="mt-5">
        {savedPalettes.map((palette, index) => (
          <section key={index} className="bg-gray-100 p-1 my-2">
            <div className="flex flex-wrap mt-3 justify-center">
              {palette.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className="color-block w-16 h-16 text-sm flex items-center justify-center m-1 hover:opacity-75 rounded-md"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </div>
              ))}
            </div>
            <button
              className="delete-palette-button block mx-auto mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
              onClick={() => deletePalette(index)}
            >
              Delete
            </button>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
