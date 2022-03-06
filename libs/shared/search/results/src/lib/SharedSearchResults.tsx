import { Fragment, useState, useRef } from 'react';
import { Dialog, Transition, Combobox, FocusTrap } from '@headlessui/react';
import { FiSearch } from 'react-icons/fi';
import { IoSearchCircle } from 'react-icons/io5';
import { useRouter } from 'next/router';

import './SharedSearchResults.module.css';

/* eslint-disable-next-line */
export interface SharedSearchResultsProps {
  isSearchOpen: any;
  setIsSearchOpen: any;
}

export function SharedSearchResults(props: SharedSearchResultsProps) {
  const { isSearchOpen, setIsSearchOpen } = props;
  // const [isSearchOpen, setIsSearchOpen] = useState<any>(true);
  const focusRef = useRef(null);
  const [query, setQuery] = useState<any>('');
  const router = useRouter();


  const projects = [
    {
      id: 1,
      title: 'htl.chat - Students chat app',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/1',
    },
    {
      id: 2,
      title: 'Arlene Mccoy',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/2',
    },
    {
      id: 3,
      title: 'Devon Webb',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/3',
    },
    {
      id: 4,
      title: 'Tom Cook',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/4',
    },
    {
      id: 5,
      title: 'Tanya Fox',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/5',
    },
    {
      id: 6,
      title: 'Hellen Schmidt',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/6',
    },
    {
      id: 7,
      title: 'Hellen Schmidt',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/7',
    },
    {
      id: 8,
      title: 'Hellen Schmidt',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/8',
    },
    {
      id: 9,
      title: 'Hellen Schmidt',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/9',
    },
    {
      id: 10,
      title: 'Hellen Schmidt',
      desc: 'A platorm for students to study, share and laugh togehter.',
      link: '/project/10',
    },
  ];
  const [selected, setSelected] = useState(projects[0]);

  const filteredProjects = query
    ? projects.filter((project) =>
        project.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Transition show={isSearchOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 pt-[35vh] overflow-y-auto"
        onClose={() => setIsSearchOpen(false)}
        initialFocus={focusRef}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        {/* <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span> */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="px-4 text-center max-h-40">
            <Combobox
              value={projects}
              onChange={(project) => {
                setIsSearchOpen(false);
                router.push(`${project.link}`);
              }}
              as="div"
              className="relative max-w-md mx-auto rounded-xl backdrop-blur-md shadow-xl bg-[#bfb4c728] shadow-black/30 ring-[0.5px] ring-[#4E4D47] ring-opacity-30"
            >
              <div className="flex gap-2 items-center pl-4">
                <FiSearch className="text-gray-400 text-lg" />
                <Combobox.Input
                  className="h-12 w-full border-0 bg-transparent text-titleColor placeholder-gray-400 disable-ring"
                  placeholder="Spotlight Search"
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                />
              </div>

              <Combobox.Options
                static
                className="text-sm text-left w-full overflow-y-auto px-3"
              >
                {filteredProjects.map((project) => (
                  <Combobox.Option
                    key={project.id}
                    // Used for the Combobox onChange
                    value={project}
                    className={({ active }) =>
                      `flex gap-1 disable-ring items-center text-titleColor cursor-default leading-7 pl-1.5 ${
                        active ? 'bg-sky-600 rounded-lg' : ''
                      }`
                    }
                  >
                    {({ active }) => (
                      <Fragment>
                        <IoSearchCircle className="text-gray-400" />
                        {project.title}
                      </Fragment>
                    )}
                  </Combobox.Option>
                ))}
                {query && filteredProjects.length === 0 && (
                  <Combobox.Option
                    className="flex gap-1 px-3 pb-3 text-titleColor leading-7"
                    key="noCookies"
                    value="No results found"
                  >
                    <p>There are no cookies left</p>
                    <span role="img">🍪</span>
                  </Combobox.Option>
                )}
              </Combobox.Options>
            </Combobox>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>

    //  <Dialog
    //   open={isSearchOpen}
    //   as="div"
    //   className="fixed inset-0 z-10 pt-[35vh] overflow-y-auto"
    //   onClose={setIsSearchOpen}
    //   initialFocus={completeButtonRef}
    // >
    //   <div className="px-4 text-center">
    //     {/* Used to darker the whole screen */}
    //     <Dialog.Overlay className="fixed inset-0" />

    //     {/* This element is to trick the browser into centering the modal contents. */}
    //     {/* <span className="inline-block h-screen align-middle" aria-hidden="true">
    //       &#8203;
    //     </span> */}
    //     <Combobox
    //       value={projects}
    //       onChange={(project) => {
    //         setIsSearchOpen(false);
    //         router.push(project.link);
    //       }}
    //       as="div"
    //       className="relative max-w-md mx-auto rounded-xl backdrop-blur-md shadow-xl bg-[#bfb4c728] shadow-black/30 ring-[0.5px] ring-[#4E4D47] ring-opacity-30"
    //     >
    //       <div className="flex gap-2 items-center pl-4" ref={completeButtonRef}>
    //         <FiSearch className="text-gray-400 text-lg" />
    //         <Combobox.Input
    //           className="h-12 w-full border-0 bg-transparent text-titleColor placeholder-gray-400 disable-ring"
    //           placeholder="Spotlight Search"
    //           onChange={(event) => {
    //             setQuery(event.target.value);
    //           }}
    //         />
    //       </div>

    //       <Combobox.Options
    //         static
    //         className="text-sm text-left max-h-40 w-full overflow-y-auto px-3"
    //       >
    //         {filteredProjects.map((project) => (
    //           <Combobox.Option
    //             key={project.id}
    //             value={project}
    //             className={({ active }) =>
    //               `flex gap-1 disable-ring items-center text-titleColor cursor-default leading-7 pl-1.5 ${
    //                 active ? 'bg-sky-600 rounded-lg' : ''
    //               }`
    //             }
    //           >
    //             {({ active }) => (
    //               <Fragment>
    //                 <IoSearchCircle className="text-gray-400" />
    //                 {project.title}
    //               </Fragment>
    //             )}
    //           </Combobox.Option>
    //         ))}
    //         {query && filteredProjects.length === 0 && (
    //           <Combobox.Option
    //             className="px-3 pb-3 text-titleColor flex gap-1"
    //             key="noCookies"
    //             value="No results found"
    //           >
    //             <p>There are no cookies left</p>
    //             <span>🍪</span>
    //           </Combobox.Option>
    //         )}
    //       </Combobox.Options>
    //     </Combobox>
    //   </div>
    // </Dialog>
  );
}

export default SharedSearchResults;
