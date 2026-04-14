import { DropdownMenu } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";


export default ({ currentLevel, setCurrentLevel, maxLevels }) => (
    <DropdownMenu.Root className="DropdownMenuRoot">
        <DropdownMenu.Trigger asChild>
            <button className="IconButton" aria-label="Customise options">
                Level {currentLevel + 1}
                <ChevronDownIcon />
            </button>
        </DropdownMenu.Trigger>


        <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                {Array.from({ length: maxLevels }, (_, i) => (
                    <DropdownMenu.Item className="DropdownMenuItem"
                        key={i}
                        value={i}
                        onSelect={() => setCurrentLevel(i)}
                    >
                        Level {i + 1}
                    </DropdownMenu.Item>
                ))}
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root>
);
