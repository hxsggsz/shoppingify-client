import { Flex } from '@chakra-ui/react';
import { SideBar } from '@/components/SideBar';
import { SideDrawer } from '@/components/SideDrawer';

export const MainScreen = () => (
  <Flex bg="#f1f1f1" w="full" justifyContent="space-between">
    <SideBar />
    <SideDrawer />
  </Flex>
);
