import React from "react";
import renderer from "react-test-renderer";
import DataTable from "../src/components/table";

test("DataTable displays given data", () => {
  const component = renderer.create(
    <DataTable data={[{id:1, name:"mike", surName:"He", hour:40}]}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  let treeStr = JSON.stringify(tree);
  expect(treeStr).toMatch(/mike/);
  expect(treeStr).toMatch(/he/);
  expect(treeStr).toMatch(/40/);

});
