import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export default function RadixTabs() {
  return (
    <Root>
      <List>
        <Trigger value="tab1">One</Trigger>
        <Trigger value="tab2">Two</Trigger>
        <Trigger value="tab3">Three</Trigger>
      </List>
      <Content value="tab1">Tab one content</Content>
      <Content value="tab2">Tab two content</Content>
      <Content value="tab3">Tab three content</Content>
    </Root>
  );
}

const Root = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  box-shadow: 0 2px 10px black;
  border-radius: 6px;
`;

const List = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  border-bottom: 1px solid black;
`;

const Trigger = styled(Tabs.Trigger)`
  background-color: white;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 1;
  border: none;

  &:first-child {
    border-top-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
  }

  &:hover {
    color: #baa7ff;
  }

  &[data-state="active"] {
    color: #baa7ff;
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
  }
`;

const Content = styled(Tabs.Content)`
  padding: 20px;
`;
