//Services Page//
import React, { useState } from 'react';
import './Project.css';
import Project1 from './Images/identify_disease.png';
import Project2 from './Images/self_treatment.png';
import Project3 from './Images/dermatologist.png';

function Project () {
    return (
        <div className="project component_space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Project</h1>
                <p className="heading p_color">There are many variations of passages of 
                Lorem Ipsum available,</p>
                <p className="heading p_color">but the majority have sufferd alteration.</p>
            </div>
            <div className="container">
                <div className="row">

                    //services 1//
                    <div className="col_3">
                        <div className="project_box pointer relative">
                            <div className="project_box_img">
                                <img src={Project1} className="project_img" alt="" />
                            </div>
                            <div className="mask_effect"></div>
                        </div>
                        <div className="project_meta absolute">
                            <h5 className="project_text">Identifying the disease</h5>
                            <h4 className="project text">A great way to identify your hair and scalp disease efficiently.</h4>
                            <a href="Project" className="project_btn">View Details</a>
                        </div>
                    </div>
                </div>

                //services 2//
                <div className="col_3">
                        <div className="project_box pointer relative">
                            <div className="project_box_img">
                                <img src={Project2} className="project_img" alt="" />
                            </div>
                            <div className="mask_effect"></div>
                        </div>
                        <div className="project_meta absolute">
                            <h5 className="project_text">Providing self treatment methods</h5>
                            <h4 className="project text">We provide self treatment methods for your hair and scalp diseases within a short period of time.</h4>
                            <a href="Project" className="project_btn">View Details</a>
                        </div>
                    </div>
                </div>

                //services 3//
                <div className="col_3">
                        <div className="project_box pointer relative">
                            <div className="project_box_img">
                                <img src={Project3} className="project_img" alt="" />
                            </div>
                            <div className="mask_effect"></div>
                        </div>
                        <div className="project_meta absolute">
                            <h5 className="project_text">Recommending dermatologists</h5>
                            <h4 className="project text">If you prefer to get in touch with a dermatologist we are able to recommend dermatologists to you.</h4>
                            <a href="Project" className="project_btn">View Details</a>
                        </div>
                    </div>

                <div className="view_more_btn d_flex_align_items_center justify_content_center pxy_30"></div>
                <button className="view_more pointer btn">View more</button>
                </div>


    
    )
    
}

export default Project;
