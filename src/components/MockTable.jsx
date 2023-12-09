import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

export const MockTable = () => {
  return (
    <TableContainer>
      <Table variant="">
        <Thead>
          <Tr textAlign="center">
            <Th  fontSize={20}>SPEAKING</Th>
            <Th fontSize={20}>READING</Th>
          </Tr>
        </Thead>
        <Tbody textAlign="center">
          <Tr>
            <Td>
              <MdOutlineKeyboardVoice fontSize={40}/>
            </Td>

            <Td>
              <FaBookOpen fontSize={40}/>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
