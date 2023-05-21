import React from "react";

const Features = () => {
  return (
    <section className="bg-blue-100 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md items-center mx-auto mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
            Services{" "}
          </h2>
          <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">
            Our homestay provides a variety of services to make your stay as
            comfortable and enjoyable as possible. These services include:
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className="rounded-md"
            />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Delicious Food
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our homestay hosts offer delicious home-cooked meals that provide
              a taste of the local cuisine. Guests can enjoy a variety of
              traditional dishes and flavors, made with fresh and locally
              sourced ingredients.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className="rounded-md"
            />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Activities and sports
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We provide a variety of activities and sports such as hiking,
              biking, swimming, fishing, and more, to make your stay fun and
              adventurous. Our hosts can also provide information on nearby
              sports and recreational facilities.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1486679679458-629f321a617c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXBmaXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className="rounded-md"
            />

            <h3 className="mb-2 text-xl font-bold dark:text-white">Campfire</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We offer campfire facilities, where guests can gather around the
              fire, share stories, and make new friends. This is a great way to
              relax and unwind after a day of activities.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className="rounded-md"
            />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Comfortable beds
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our homestays are equipped with comfortable beds to ensure that
              guests have a good night's sleep. We provide clean linens and
              towels to ensure your comfort.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className="rounded-md"
            />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Adventure trekking
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our homestay offers an adventure trekking experience with local
              guide. You can explore the natural beauty of the area, learn about
              local culture and tradition and enjoy the scenic view.
            </p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661306543132-93937b4c242e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="..."
              className="rounded-md"
            />

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Rain dance
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We also provide arrangements for rain dance and other recreational
              activities, where guests can enjoy the scenic beauty and the
              pleasure of dancing in the rain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
