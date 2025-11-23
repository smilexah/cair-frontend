import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/ui/select";
import {useLangSwitch} from "@/shared/components/header/hooks/useLangSwitch";

export const LangSwitcher = () => {
    const { currentLocale, switchLocale } = useLangSwitch();


    return (
        <Select  value={currentLocale} onValueChange={switchLocale}>
            <SelectTrigger className={"max-[640px]:rounded-2xl"}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="ru">RU</SelectItem>
                <SelectItem value="en">ENG</SelectItem>
                <SelectItem value="kz">KZ</SelectItem>
            </SelectContent>
        </Select>
    )
}