import "./App.css";
import bgHome from "./assets/background.png";

function App() {
  return (
    <>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div className="flex">
            <div className="flex-col">Kiri</div>
            <div>Kanan</div>
          </div>
          {/* <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <h1 class="text-4xl font-bold text-gray-800">Teka Teki Silang</h1>
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <img src={bgHome} class="w-full h-full object-cover" alt="" />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default App;
