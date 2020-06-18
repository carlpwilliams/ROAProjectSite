import React, { Component } from 'react'
import './section.scss';
export enum sectionType {
    full,
    banner
}
type Props = { children: any, className?: any; type?: sectionType, bannerImage?: any; }
export class Section extends Component<Props> {
    render() {
        return (
            <div className={this.getClassname()} style={{ backgroundImage: `url(${this.props.bannerImage})` }}>
                <div className="inner">
                    {this.props.children}
                </div>

            </div>
        )
    }

    getClassname = () => {
        let ret = "section ";
        switch (this.props.type) {
            case sectionType.banner:
                ret += "container-fluid banner ";
                break;
            default:
                ret += "mt-5  container ";
        }

        return `${ret} ${this.props.className}`;
    }
}

export default Section
