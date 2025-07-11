export default function ThanksgivingPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <div
        className="hidden md:block relative h-[75vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/thanksgiving.jpg")' }}
      >
        <div className="absolute inset-0  flex items-center justify-center"></div>
      </div>

      <div className="px-4 py-10 max-w-3xl mx-auto pt-30">
        <h1 className="text-4xl font-bold text-center text-red-800 mb-6">
          Thanksgiving Dinner Takeout
        </h1>
        <p className="text-lg text-center mb-8">
          We’re excited to continue our Thanksgiving tradition, offering a
          delicious dinner takeout crafted with the finest ingredients. This
          year, we’re proud to once again source our high-quality turkey from
          Outpost Farm in Holliston, bringing the taste of local farm freshness
          straight to your table.
        </p>
        <p className="text-lg mb-6">
          Choose from a range of options to suit your gathering, and enjoy a
          meal prepared with the same beloved recipe and care.
        </p>

        <div className="border-l-4 border-red-700 pl-4 mb-6">
          <p className="text-md">
            The main course in each option includes local farm fresh turkey
            breast, gravy, cranberry sauce, homemade dinner rolls, butter, and
            three sides of your choice.
          </p>
          <p className="mt-2">
            The sides are stuffing, mashed potato, garlic parmesan green beans,
            glazed carrots, and mac n cheese.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg shadow mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-800">
            How to Order
          </h2>
          <p>
            Call us at <span className="font-bold">(413) 821-9881</span> to
            place your order by <span className="font-bold">November 23!</span>
            <br />
            Please avoid calling during lunch and dinner rush hours.
          </p>
          <p className="mt-4">
            Pickup is on{" "}
            <span className="font-bold">Wednesday, November 27</span>, between{" "}
            <span className="font-bold">10 AM and 3 PM</span>.
            <br />
            All items are provided cold with reheating instructions.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-red-700">
              Individual Dinner Plate — $19.95
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Farm fresh sliced turkey breast</li>
              <li>Three sides</li>
              <li>
                Slice of pumpkin pie or two pieces of baklava with pistachio
              </li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-red-700">
              Family Feast — $185
            </h3>
            <p>Serves 9-12 people</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Half-pan sliced turkey breast</li>
              <li>Three half-pan sides</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-red-700">
              Grand Celebration Feast — $339
            </h3>
            <p>Serves 18-22 people</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Full pan sliced turkey breast</li>
              <li>Three full-pan sides</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-red-800 mb-4">Desserts</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Pumpkin Pie — $3.50 per slice or $10.95 whole</li>
            <li>Baklava with Pistachio — $1.75 per slice or $49 whole</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <p className="text-lg font-semibold">
            We look forward to serving you this holiday season!
          </p>
        </div>
      </div>
    </div>
  );
}
