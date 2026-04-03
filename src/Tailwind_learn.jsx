import React from "react";

function Tailwind_learn() {
  return (
    <div className=" bg-black text-white  p-4 rounded-lg m-3">
      <h1 className="font-bold text-yellow-200 text-3xl"> Ishushi </h1>
      <br />
      <h1 className="text-sm md:text-xl lg:text-3xl">Responsive Text</h1>
      <br />
      <hr />
      <br />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-blue-400 p-4">2</div>
      </div>
      <p>flex box</p>
      <br />
      <hr />
      <br />
      <div className="w-full md:w-1/2 lg:w-1/3 bg-green-400">Box</div>
      <p>Width </p>
      <br />
      <hr />
      <br />
      <div className="p-2 md:p-6 lg:p-10 border bg-gray-200 text-black">
        Responsive Padding
      </div>
      <p>Padding </p>
      <br />
      <hr />
      <br />
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <h1 className="border p-5 text-3xl">
        💀 justify-content (Horizontal Alignment)
      </h1>
      <br />
      <div className="flex gap-4 justify-start ">
        <p>Justify start</p>
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex gap-4 justify-between">
        <p>Justify between</p>
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex gap-4 justify-center">
        <p>Justify center</p>
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex gap-4 justify-around">
        <p>Justify around</p>
        <div className="bg-red-400 p-4">1</div>np
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex gap-4 justify-evenly">
        <p>Justify evenly</p>
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex gap-4 justify-end">
        <p>Justify end</p>
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="grid grid-cols-[4rem_auto_4rem] justify-stretch">
        <p>Justify stretch</p>
        <div className="bg-red-400 p-4 border">1</div>
        <div className="bg-red-400 p-4 border">2</div>
      </div>
      <br />
      <hr />
      <br />
      <h1 className="border p-5 text-3xl">💀 Align (Vertical Alignment)</h1>
      <br />
      <div className="flex h-40 items-stretch border gap-3 p-2">
        <p>items stretch</p>
        <div className=" bg-red-400 py-4">01</div>
        <div className=" bg-red-400 py-12">02</div>
        <div className=" bg-red-400 py-8">03</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex h-40 items-start border gap-3 p-2">
        <p>items start</p>
        <div className=" bg-red-400 py-4">01</div>
        <div className=" bg-red-400 py-12">02</div>
        <div className=" bg-red-400 py-8">03</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex h-40 items-center border gap-3 p-2">
        <p>items center</p>
        <div className="bg-red-400 py-4">01</div>
        <div className="bg-red-400 py-12">02</div>
        <div className="bg-red-400 py-8">03</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex h-40 items-end border gap-3 p-2">
        <p>items end</p>
        <div className="bg-red-400 py-4">01</div>
        <div className="bg-red-400 py-12">02</div>
        <div className="bg-red-400 py-8">03</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex h-40 items-baseline border gap-3 p-2">
        <p>items baseline</p>
        <div className="bg-red-400 py-4">01</div>
        <div className="bg-red-400 py-12">02</div>
        <div className="bg-red-400 py-8">03</div>
      </div>
      <br />
      <hr />
      <br />
      <h1 className="border p-5 text-3xl">💀 Center Everything</h1>
      <br />
      <hr />
      <br />
      <div className="flex justify-center items-center h-screen border p-2">
        Center Content
      </div>
      <br />
      <hr />
      <br />
      <h1 className="border p-5 text-3xl">💀 Grid</h1>
      <br />
      <hr />
      <br />
      <div className="grid grid-cols-3 gap-4">
        <p>Basic Grid with column (3 Column)</p>
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <p>Responsive Grid</p>
        <div className="bg-red-400 p-4">1</div>
        <div className="bg-red-400 p-4">2</div>
      </div>
      <br />
      <hr />
      <br />
      <div className="grid grid-cols-3 gap-4">
        <p>Column span</p>
        <div className="col-span-2  bg-red-400 p-4">Big</div>
        <div className="bg-blue-400 col-span-3 p-4">Small</div>
      </div>
      <ul>
        <li>First box → takes 2 columns</li>
        <li>Second box → takes 1 column</li>
      </ul>
      <br />
      <hr />
      <br />
      <div className="grid grid-cols-3 gap-4">
        <h1>Real-life Use</h1>
        <div className="col-span-3 bg-gray-400 p-4">Header</div>
        <div className="col-span-2 bg-blue-400 p-4">Main Content</div>
        <div className="bg-red-400 p-4">Sidebar</div>
      </div>
      <br />
      <hr />
      <br />
      <h1 className="border p-5 text-3xl">
        💀 Spacing ,Sizing, & Layout control
      </h1>
      <br />
      <hr />
      <br />
      <div className="border rounded w-50 text-center text-2xl">
        Spacing System
      </div>
      <br />
      <hr />
      <div>
        <p>Padding</p>
        <br />
        <div className="border p-4">All Sides</div>
        <br />
        <div className="border px-4">Left + Right</div>
        <br />
        <div className="border py-4">Top + Bottom</div>
        <br />
        <hr />
        <br />
        <p>Margin</p>
        <br />
        <div className="border m-4">All Sides</div>
        <br />
        <div className="border mt-4">Top</div>
        <br />
        <div className="border mx-auto">Center Horizontally</div>
      </div>
      <br />
      <hr />
      <br />
      <p className="">flex With Gap</p>
      <br />
      <div className="flex gap-4 ">
        <p className="bg-green-500 p-2">Block-1</p>
        <p className="bg-green-500 p-2">Block-2</p>
      </div>
      <br />
      <br />
      <div className="border rounded w-50 text-center text-2xl">
        Width System
      </div>
      <br />
      <p className="">Fixed Width</p>
      <br />
      <div className="w-40 bg-blue-400">box</div>
      <br />
      <p className="">Full Width</p>
      <br />
      <div className="w-full bg-blue-400">Full</div>
      <br />
      <p className="">Fraction Width</p>
      <br />
      <div className="w-1/2 bg-blue-400">Half</div>
      <div className="w-1/3 bg-blue-400">One Third</div>
      <div className="w-1/4 bg-blue-400">One Fourth</div> <br />
      <br />
      <div className="border rounded w-50 text-center text-2xl">
        Height System
      </div>
      <br />
      <div className="h-40 bg-red-400">Normal</div>
      <div className="h-screen bg-gray-500">Full screen height</div>
      <br />
      <br />
      <div className="border rounded w-50 text-center text-2xl">Max Width</div>
      <br />
      <div className="max-w-xl mx-auto bg-red-700">
        👉 Meaning: Limit width Center content 👉 Used in: Websites Blogs Forms
      </div>
      <br />
      <br />
      <div className="border rounded w-50 text-center text-2xl">Position</div>
      <br />
      <div className="relative">
        <div className="absolute top-0 right-0">top Right</div>
        <div className="absolute top-0 left-65 ">top Center</div>
        <div className="absolute top-0 left-0">top left</div>
      </div>
      <br />
      <br />
      <br />
      <div className="border rounded w-50 text-center text-2xl">Z-Index</div>
      <br />
      <div className="relative m-7 p-9">
        <div className="absolute top-0 left-0 bg-red-400 p-4 z-10">Box 1</div>
        <div className="absolute top-2 left-2 bg-blue-400 p-4 z-20">Box 2</div>
        <div className="absolute top-4 left-4 bg-green-400 p-4 z-30">Box 3</div>
        <div className="absolute top-6 left-6 bg-gray-400 p-4 z-40">Box 4</div>
      </div>
      <br />
      <br />
      <div className="border rounded w-50 text-center text-2xl">
        Overflow Control
      </div>
      <br />
      <p>Hidden</p>
      <br />
      <div className=" m-2 border p-3 w-40 h-20 overflow-hidden">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        perferendis consequatur explicabo, ut obcaecati dolorem corrupti, sint
        suscipit inventore est eligendi sequi earum quia, ex odit ducimus
        similique fugiat facilis nihil voluptate quam magnam quis voluptas?
        Explicabo assumenda labore ad accusamus harum magnam dolores tempore
        perferendis adipisci cumque, eum quia odit libero amet, doloribus ipsum,
        usantium debitis architecto!.
      </div>
      <br />
      <p>Scroll</p>
      <br />
      <div className=" m-2 border p-3 w-40 h-20 overflow-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        unde eos doloribus soluta tempore praesentium vero, pariatur, nam fugit
        beatae iste illo aperiam quidem maiores animi tempora? Molestiae
        repellat quod, molestias expedita magni facilis provident accusamus. Vel
        quos, cumque dolorem illo optio nostrum nisi blanditiis amet ea aut
        aliquid corrupti tenetur dolores sit beatae veniam tempore
        exercitationem ipsum inventore modi iusto temporibus rem! Aut sunt, tes
        officia dignissimos perferendis labore possimus laborum.
      </div>
      <br />
      <p>Auto</p>
      <br />
      <div className=" m-2 border p-3 w-40 h-20 overflow-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi
        nostrum at? Et dolorum ut non sint provident molestias voluptatibus iure
        temporibus incidunt sunt neque voluptate nihil ullam iste nisi beatae
        quae quisquam hic natus autem sit, sequi in sapiente perspiciatis.
        Similique iure odio neque molestias eveniet facilis voluptatum, eum
        asperiores rem temporibus quo? Cum magnam voluptatum, eaque quo mollitia
        anditiis dolores a nihil aliquam maxime obcaecati dolor fugiat
      </div>
      <br />
      <p>visible(Default)</p>
      <br />
      <div className=" m-2 border p-3 overflow-visible">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        blanditiis velit dolorum veritatis. Ut, aspernatur dicta voluptate
        voluptatem obcaecati numquam repellat qui aperiam, assumenda sit, nobis
        laudantium quam et iure. Doloribus nulla labore, officiis eum quo error
        ullam, fugit maiores facilis eaque rerum at eveniet vero adipisci itaque
        omnis sapiente aliquid pariatur, eligendi illo culpa hic repudiandae?
      </div>
      <br />
      <p>Real-life Example</p>
      <br />
      <div className=" m-2 border p-3 w-60 h-32 overflow-auto border p-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        sapiente vitae sunt cupiditate quae distinctio blanditiis dignissimos
        maiores est labore quaerat iste nulla, beatae eaque laudantium corrupti
        voluptate dolore, ipsum quod asperiores ea sed minima autem? Id dolores,
      </div>
      <br />
      <hr />
      <br />
      <div className="border rounded w-70 p-1 text-center text-2xl">
        Typography & Colors
      </div>
      <br />
      <p>Font Size</p>
      <br />
      <div className="flex gap-2">
        <p className=" p-2 border text-sm">Small</p>
        <p className=" p-2 border text-lg">Large</p>
        <p className=" p-2 border text-3xl">Extra Large</p>
      </div>
      <br />
      <p>Font Weight</p>
      <br />
      <div className="flex gap-2">
        <p className=" p-2 border font-light">Light</p>
        <p className=" p-2 border font-medium">Medium</p>
        <p className=" p-2 border font-bold">Bold</p>
      </div>
      <br />
      <p>Text Alignment</p>
      <br />
      <div className="">
        <p className=" p-2 border text-left">Left</p>
        <p className=" p-2 border text-center">Center</p>
        <p className=" p-2 border text-right">Right</p>
      </div>
      <br />
      <p>Line Alignment (Spacing Between Lines)</p>
      <br />
      <div className=" ">
        <p className=" p-2 border leading-tight">Tight</p>
        <p className=" p-2 border leading-loose">Loose</p>
      </div>
      <br />
      <p>Letter Spacing</p>
      <br />
      <div className=" ">
        <p className=" p-2 border tracking-wide">Wide </p>
        <p className=" p-2 border tracking-tight">Tight</p>
      </div>
      <br />
      <p>Text Transform</p>
      <br />
      <div className="flex gap-2">
        <p className=" p-2 border uppercase">UPPERCASE</p>
        <p className=" p-2 border lowercase">lowercase</p>
        <p className=" p-2 border capitalize">Capitalize</p>
      </div>
      <br />
      <div>
        <div className="flex gap-4">
          <p className=" p-2 text-red-500">Text Color </p>
          <div className="p-2 bg-blue-500 text-white">Backgrouud color</div>
          <button className="bg-green-500 hover:bg-green-700 text-white p-2">
            Hover
          </button>
          <div className=" p-2 border border-gray-400">Border</div>
          <br />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="border rounded w-90 p-1 text-center text-2xl">
        Focus & State Variants
      </div>
      <br />
      <p>Focus</p>
      <input className="border focus:border-blue-500 focus:outline-none p-2" />
      <br />
      <br />
      <p>Active</p>
      <button className="bg-green-500 active:bg-green-700 text-white p-2">
        Click Me
      </button>
      <br />
      <br />
      <p>Disable</p>
      <button className="bg-gray-400 text-white p-2 cursor-not-allowed">
        Click Me
      </button>
      <br />
      <br />
      <p>Focus Ring</p>
      <input className="border p-2 focus:ring-2 focus:ring-blue-400" />
      <br />
      <br />
      <p>Group Hover 👉 Hover parent → child changes</p>
      <div className="group p-4 bg-gray-200">
        <p className="group-hover:text-red-500">Text</p>
      </div>
      <br />
      <hr />
      <br />
      <div className="border rounded w-90 text-center text-2xl">
        Position, Display & Visibility
      </div>
      <br />
      <div className=" border-b border-t rounded w-75">🔹 Part 1: Position</div>
      <br />
      <p> 1. Static (default)</p>
      <div className="static">Normal flow</div>
      <p>👉 Default — no special positioning</p>
      <br />
      <p>2. Relative</p>
      <div className="relative">Relative word</div>
      <p>👉 Used as reference for absolute elements</p>
      <br />
      <p>3. Absolute</p>
      <div className="absolute top-0 right-0 text-3xl">Absolute word</div>
      <p>👉 Positioned inside nearest relative parent</p>
      <br />
      <p>4. Fixed</p>
      <div className="fixed top-0 left-0 w-25 p-2 m-3 border bg-gray-700 ">
        Fixed word
      </div>
      <p>👉 Stays fixed on screen (even when scrolling)</p>
      <br />
      <p>5. Sticky</p>
      <div className="sticky top-0 left-65 border text-center w-50">
        <p>👉 Scroll → sticks at top</p>
      </div>
      <br />
      <div className=" border-b border-t rounded w-75">🔹 Part 2: Display</div>
      <br />
      <p>🔹 Block</p>
      <div className="block bg-red-400">Full width</div>
      <br />
      <p>🔹 Inline</p>
      <span className="inline bg-red-400">Inline</span>
      <br />
      <br />
      <p>🔹 Inline-block</p>
      <span className="inline-block w-20 bg-red-400">Box</span>
      <br />
      <br />
      <p>🔹 Flex</p>
      <div className="flex bg-red-400">Flex layout</div>
      <br />
      <p>🔹 Grid</p>
      <div className="grid bg-red-400">Grid layout</div>
      <br />
      <p>🔹 Hidden 👉 Completely removed</p>
      <div className="hidden">Invisible</div>
      <br />
      <br />
      <div className="border p-2 text-red-500">
        {" "}
        This box from invisible for only show its completed removed but space is
        count
      </div>
      <br />
      <div className="border-b border-t rounded w-75">
        🔹 Part 3: Visibility
      </div>
      <br />
      <p>🔹 Invisible : Hidden but space remains</p>
      <br />
      <br />
      <div className="border p-2 text-red-500">
        {" "}
        This box from invisible for only show its completed removed but space is
        count
      </div>
      <div className="invisible">invisible word</div>
      <p>🔹 Visible 👉 Element hidden BUT space stays</p>
      <div className="visible">Normal</div>
      <br />
      <p>🔹 Responsive Visibility : when small device its block</p>
      <div className="hidden sm:block">hidden word</div>
      <br />
      <hr />
      <br />
      {/* ------------------------------------------------------------------------------- */}
      <div class="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 class="text-xl font-bold">Logo</h1>
        <ul class="flex gap-4">
          <li class="hover:text-gray-300 cursor-pointer">Home</li>
          <li class="hover:text-gray-300 cursor-pointer">About</li>
          <li class="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>
      <div class="p-6 bg-gray-100 min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h2 class="text-xl font-bold mb-2 text-black">Card Title</h2>
            <p class="text-gray-600 mb-4">This is a simple card description.</p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h2 class="text-xl font-bold mb-2 text-black">Card Title</h2>
            <p class="text-gray-600 mb-4">This is a simple card description.</p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h2 class="text-xl font-bold mb-2 text-black">Card Title</h2>
            <p class="text-gray-600 mb-4">This is a simple card description.</p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        </div>
        <br />
      </div>
      {/* -------------------------------------------------------------------------------------- */}
      <br />
      <hr />
      <br />
      <div className="text-bold text-3xl">Modal (Popup)</div>
      {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center item-center border text-white p-5"> */}
      <div>
        {/* Cheack this remove commet and view how its works */}
        <h2 className="cursor-pointer text-xl font-bold mb-2">Model Title</h2>
        <p className="mb-4">
          This is Model content so please cheack this its proper work or not .
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ">
          Close
        </button>
        <br />
        <br />
        <hr />
        <ul className="p-4 ">
          <h2>🔹 Concepts Used</h2>
          <li>- fixed → full screen</li>
          <li>- inset-0 → top, right, bottom, left = 0</li>
          <li>- bg-opacity-50 → dark overlay</li>
          <li>- flex center → center modal</li>
        </ul>
      </div>
      {/* </div> */}
      <br />
      <br />
      <hr />
      <div className="text-3xl">Dropdown Menu</div>
      <br />
      <div className="realtive inline-block">
        <butoon className="bg-blue-500 text-white px-4 py-2 rounded">
          Menu
        </butoon>
        <div className="absolute mt-2 bg-white text-black border rounded shadow w-40">
          <p className="p-2 hover-bg-gray-100 cursor-pointer">Profile</p>
          <p className="p-2 hover-bg-gray-100 cursor-pointer">Setting</p>
          <p className="p-2 hover-bg-gray-100 cursor-pointer">Logout</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ul>
          <h2>🔹 Important Concept</h2>
          <li>👉 relative (parent)</li>
          <li>👉 absolute (dropdown position)</li>
        </ul>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default Tailwind_learn;
