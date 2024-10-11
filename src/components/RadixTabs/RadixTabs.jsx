import * as Tabs from "@radix-ui/react-tabs";

export default function RadixTabs() {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger value="tab1">One</Tabs.Trigger>{" "}
        <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Tab one content</Tabs.Content>
      <Tabs.Content value="tab2">Tab two content</Tabs.Content>
      <Tabs.Content value="tab3">Tab three content</Tabs.Content>
    </Tabs.Root>
  );
}
