import React from "react";

//
import { Disclosure } from "@headlessui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlayFilters = (props) => {
  return (
    <>

      {/* If you want inter active button we use Disclosure button For Ex. topDrop down and bottomDrop down or any other interActive we use Disclosure */}
      <Disclosure>


        {/* open = open means whenever the particular button is open or not */}

        {({ open }) => (
          <>
            

            {/* We just called button which is Present in the Disclosure  */}
            <Disclosure.Button className="py-2 flex items-center gap-3 ">


              {/* open = If the open is active then execute BiChevronUp or if it is close then execute this command <BiChevronDown />*/}
              {open ? <BiChevronUp /> : <BiChevronDown />}


              {/*  If it is open then I want red color text. if it is close then gray color.   */}
              <span className={open ? "text-red-600" : "text-gray-700"}>
                {props.title}
              </span>
            </Disclosure.Button>


            {/* We're calling Panel which is body of the main element which nothing but tag  */}
            <Disclosure.Panel className="px-4 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-3 flex-wrap">
                '
                {/* I need to map all the tags which is present in the tags(Access each tag one by one)
                    
                      tags = tags which we have right now
                      tag = one tag
                      index = Position of the tag ex.0,1,2,3
                  
                  */}
                {props.tags.map((tag, index) => (
                  <div
                    key={index} //Specific key
                    className="border-2 border-gray-200 px-3 py-1 rounded"
                  >
                    <span className="text-red-600">{tag}</span>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default PlayFilters;
