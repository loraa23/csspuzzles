import { DropdownMenu } from "radix-ui";
import { QuestionMarkIcon } from "@radix-ui/react-icons";


export default () => (
    <DropdownMenu.Root className="DropdownMenuRoot">
        <DropdownMenu.Trigger asChild>
            <button className="IconButton question" aria-label="Customise options">
                <QuestionMarkIcon />
            </button>
        </DropdownMenu.Trigger>


        <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent instructions" sideOffset={12}>
                <DropdownMenu.Item>
                    <h4>How To Play</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam officiis dolore voluptate praesentium aut, non esse consequuntur corrupti quidem distinctio similique nihil soluta modi vel sapiente ex libero totam!</p>
                </DropdownMenu.Item>
                <DropdownMenu.Arrow />
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root>
);
