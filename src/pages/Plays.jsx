import React from "react";
import Default_layout from "../layout/Default_layout";

// components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="font-bold text-2xl mb-4">Plays in Hospet</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets"
                subtitle="Comedy Show | English, Marathi | 18yrs+ | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets "
                subtitle="Comedy Show | English, Marathi | 18yrs+ | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets "
                subtitle="Comedy Show | English, Marathi | 18yrs+ | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets "
                subtitle="Comedy Show | English, Marathi | 18yrs+ | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets "
                subtitle="Comedy Show | English, Marathi | 18yrs+ | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets "
                subtitle="Comedy Show | English, Marathi | 18yrs+ | 2hr 30min"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>

          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Marathi", "Hindi"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Default_layout(Plays);
