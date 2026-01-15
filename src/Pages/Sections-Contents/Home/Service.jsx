export default function Services() {
  return (
    <section className="bg-[#fbf3ea] py-20 h-[120vh]">
      <div className="w-full mx-auto  grid grid-cols-12 gap-10  pl-8 pr-2 py-8 ">

        {/* LEFT CONTENT */}
        <div className="col-span-12 lg:col-span-4 gap-8 ">
          <span className="inline-block border border-black rounded-full px-4 py-1 text-sm mb-6">
            Services
          </span>

          <h2 className="text-4xl font-light leading-snug mb-10">
            Together we design the
            <br />
            future of industrial
            <br />
            solutions.
          </h2>

          <button className="bg-zinc-800 !text-white px-6 py-3 flex items-center gap-2">
            Learn More <span>↗</span>
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 py-6">

          {/* CARD 01 */}
          <div className="bg-white">
            <div className="px-4 py-14">
              <h3 className="font-semibold mb-3">
                DESIGN & ENGINEERING
                <br />
                ASSESSMENT
              </h3>
              <p className="text-sm text-gray-600">
                Europack offers comprehensive production
                solutions...
              </p>
            </div>

            <div className="flex items-center justify-between border-t">
              <div className="bg-orange-500 text-white px-4 py-3">
                01
              </div>
              <div className="pr-4 text-orange-500 text-xl">◔</div>
            </div>
          </div>

          {/* CARD 02 */}
          <div className="bg-white ">
            <div className="px-4 py-14">
              <h3 className="font-semibold mb-3">
                TECHNICAL SUPPORT
              </h3>
              <p className="text-sm text-gray-600">
                Europack provides organised handling of spare
                parts...
              </p>
            </div>

            <div className="flex items-center justify-between border-t">
              <div className="bg-orange-500 text-white px-4 py-3">
                02
              </div>
              <div className="pr-4 text-orange-500 text-xl">◯</div>
            </div>
          </div>

          {/* CARD 03 */}
          <div className="bg-white ">
            <div className="px-4 py-14">
              <h3 className="font-semibold mb-3">
                PERIODIC INSPECTION &
                <br />
                MAINTENANCE
              </h3>
              <p className="text-sm text-gray-600">
                We provide regular inspection and maintenance
                services...
              </p>
            </div>

            <div className="flex items-center justify-between border-t">
              <div className="bg-orange-500 text-white px-4 py-3">
                03
              </div>
              <div className="pr-4 text-orange-500 text-xl">◌</div>
            </div>
          </div>

          {/* CARD 04 */}
          <div className="bg-white ">
            <div className="px-4 py-14">
              <h3 className="font-semibold mb-3">
                INNOVATION & UPGRADES
              </h3>
              <p className="text-sm text-gray-600">
                Through targeted visits in international
                exhibitions...
              </p>
            </div>

            <div className="flex items-center justify-between border-t">
              <div className="bg-orange-500 text-white px-4 py-3">
                04
              </div>
              <div className="pr-4 text-orange-500 text-xl">◔</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
