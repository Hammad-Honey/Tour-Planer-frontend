import { FILTER_GROUPS as filterGroup } from "../../utils/filterGroups";
import { useFormik } from "formik";
import { useMap } from "../../contexts/MapContext";
import { useEffect, useState } from "react";

function Filter() {
  const { setFilter, placesFilter, mapRef } = useMap();
  const [subCategory, setSubCategory] = useState("");
  useEffect(() => {
    if (!mapRef.current) return;

    // re-fetch locations when filter changes
    // (only if you already have a city)
  }, [placesFilter]);

  const options = () => {
    return Object.keys(filterGroup).map((key, index) => (
      <option key={index} value={key}>
        {key.replace("_", " ").toUpperCase()}
      </option>
    ));
  };

  const buttonsOptions = (kinds) => {
    if (!kinds) return null;

    const subOptions = filterGroup[kinds];
    if (!subOptions) return null;

    return subOptions.map((subKind) => (
      <button
        key={subKind}
        type="button"
        className={`rounded-full py-1 px-2 shadow-xl/30 ${subCategory === subKind ? "bg-blue-500 text-white" : "bg-white"}`}
        onClick={() => handleClick(kinds, subKind)}
      >
        {subKind.replace("_", " ")}
      </button>
    ));
  };

  const handleClick = (kinds, subKind) => {
    setSubCategory(subKind); // store selected subcategory
    setFilter(subKind); // update filter context
  };

  const formik = useFormik({
    initialValues: {
      kinds: "",
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex gap-2">
        <select
          name="kinds"
          value={formik.values.kinds}
          onChange={(e) => {
            formik.handleChange(e);
            setSubCategory("");
          }}
          className="rounded-full py-1 px-2 border-r-10 border-white bg-white shadow-xl/30"
        >
          <option>Select Category</option>
          {options()}
        </select>
        {buttonsOptions(formik.values.kinds)}
        {formik.values.kinds ? (
          <button
            type="button"
            onClick={formik.resetForm}
            className="rounded-full py-1 px-2  bg-red-500 shadow-xl/30"
          >
            Reset
          </button>
        ) : null}
      </form>
    </>
  );
}
export default Filter;
