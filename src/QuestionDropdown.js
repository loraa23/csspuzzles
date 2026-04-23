import { DropdownMenu } from "radix-ui";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import Instructions from "./Instructions";

const QuestionDropdown = () => (
    <DropdownMenu.Root className="DropdownMenuRoot">
        <DropdownMenu.Trigger asChild>
            <button className="IconButton question" aria-label="Customise options">
                <QuestionMarkIcon />
            </button>
        </DropdownMenu.Trigger>


        <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent instructions" sideOffset={12}>
                <DropdownMenu.Item className="instructions__DropdownMenuItem">
                    <Instructions />
                </DropdownMenu.Item>
                <DropdownMenu.Arrow />
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root>
);

export default QuestionDropdown;