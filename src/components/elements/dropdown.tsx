import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { classNames } from "@/lib/utils";
import { GiCancel } from "react-icons/gi";
import { BsChevronDoubleDown } from "react-icons/bs";

interface DropdownProps {
  label: string;
  value?: string | null;
  onChange: (value?: string) => void;
  values: { name: string; icon?: [string, string] }[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  values,
}) => {
  const [query, setQuery] = useState<string>("");

  const filteredValues =
    query === ""
      ? values
      : values.filter(({ name }) =>
          name.toLowerCase().includes(query.toLowerCase())
        );

  const current = values.find((v) => v.name === value);

  return (
    <div className="">
      <label
        htmlFor={label}
        className="block text-sm font-medium  sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <div className="flex max-w-lg rounded-md shadow-sm">
          <div
            className={`flex w-full rounded-lg border border-inputBord focus-within:border-main`}
          >
            <Combobox
              as="div"
              value={value}
              onChange={(val: string) => onChange(val)}
              className="relative w-full"
            >
              <Combobox.Button className="relative w-full">
                <Combobox.Input
                  className="w-full border-inputBord bg-transparent p-2 outline-none focus-within:border-main"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={() => (current ? current.name : "")}
                />
                <div className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  {value ? (
                    <GiCancel
                      className="text-red-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuery("");
                        onChange(undefined);
                      }}
                    />
                  ) : (
                    <BsChevronDoubleDown />
                  )}
                </div>
              </Combobox.Button>

              {filteredValues.length > 0 && (
                <Combobox.Options className="absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-containerAlt py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredValues.map(({ name, icon }) => (
                    <Combobox.Option
                      key={name}
                      value={name}
                      className={({ active }) =>
                        classNames(
                          "relative hover:bg-primary cursor-pointer select-none py-2 px-3",
                          active ? "bg-mainAlt " : ""
                        )
                      }
                    >
                      <div className="flex justify-between">
                        <span className="block">{name}</span>
                      </div>
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </Combobox>
          </div>
        </div>
      </div>
    </div>
  );
};
