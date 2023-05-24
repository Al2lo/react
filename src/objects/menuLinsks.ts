export default interface IMenuLinks extends ILink{
 active?: boolean;
}

export interface ILink {
    text?: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}