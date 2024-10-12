import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "styled-components";

export default function RadixTabs() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <button>Open</button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          {/* <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription> */}
          <TabsRoot defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">One</TabsTrigger>
              <TabsTrigger value="tab2">Two</TabsTrigger>
              <TabsTrigger value="tab3">Three</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Tab one content</TabsContent>
            <TabsContent value="tab2">Tab two content</TabsContent>
            <TabsContent value="tab3">Tab three content</TabsContent>
          </TabsRoot>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
}

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const DialogRoot = styled(Dialog.Root)`
  isolation: isolate;
`;

const DialogTrigger = styled(Dialog.Trigger)``;

const DialogPortal = styled(Dialog.Portal)``;

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 1000ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: -100;
`;

const DialogContent = styled(Dialog.Content)`
  // border: 2px solid red;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${contentShow} 1000ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const DialogTitle = styled(Dialog.Title)``;

const DialogDescription = styled(Dialog.Description)``;

const DialogClose = styled(Dialog.Close)``;

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  box-shadow: 0 2px 10px black;
  border-radius: 6px;
`;

const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  border-bottom: 1px solid black;
`;

const TabsTrigger = styled(Tabs.Trigger)`
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

const TabsContent = styled(Tabs.Content)`
  padding: 20px;
`;
