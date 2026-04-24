import { DropdownMenu } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";


const LevelDropdown = ({ currentLevel, selectLevel, maxLevels }) => (
    <DropdownMenu.Root className="DropdownMenuRoot">
        <DropdownMenu.Trigger asChild>
            <button className="level_dropdown_button" aria-label="Customise options">
                Level {currentLevel + 1}
                <ChevronDownIcon />
            </button>
        </DropdownMenu.Trigger>


        <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent  level_dropdown" sideOffset={12}>
                {Array.from({ length: maxLevels }, (_, i) => (
                    <DropdownMenu.Item className="DropdownMenuItem"
                        key={i}
                        value={i}
                        onSelect={() => selectLevel(i)}
                    >
                        {i + 1}
                    </DropdownMenu.Item>
                ))}
                <DropdownMenu.Arrow />
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root>
);

export default LevelDropdown;
