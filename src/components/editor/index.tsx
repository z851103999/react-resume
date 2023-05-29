import React, { useState, useContext, useCallback } from "react"
import { ResumeContext } from "../../context/resumeContext"
import { debounce } from "lodash";
import { Tabs } from "antd";
import type { TabsProps } from 'antd';
import { FormCreator, FormListCreator } from "./FormCreator";
import { config } from "./config";

export default function Editor() {
  const { state, dispatch } = useContext(ResumeContext)

  const handleSave = useCallback(
    debounce((value) => {
      dispatch({
        type: "save",
        payload: value,
      });
    }, 1000),
    []
  );

  const handleChange = (value: any, immediately: any) => {
    if (immediately) {
      dispatch({
        type: "save",
        payload: value,
      });
    } else {
      handleSave(value);
    }

  };

  const item = [
    {
      key: '1',
      label: '头像设置',
      children:
        <FormCreator
          config={config.avatar}
          name="avatar"
          value={state.avatar}
          onChange={handleChange}
        />
    },
    {
      key: '2',
      label: '基本信息',
      children:
        <FormCreator
          config={config.profile}
          name="profile"
          value={state.profile}
          onChange={handleChange}
        />

    },
    {
      key: '3',
      label: '教育背景',
      children:
        <FormListCreator
          name="educationList"
          config={config.educationList}
          value={state}
          onChange={handleChange}
        />

    },
    {
      key: '4',
      label: '专业技能',
      children:
        <FormListCreator
          name="skillList"
          config={config.skillList}
          value={state}
          onChange={handleChange}
        />

    },
    {
      key: '5',
      label: '工作经历',
      children:
        <FormListCreator
          name="workExpList"
          config={config.workExpList}
          value={state}
          onChange={handleChange}
        />

    },
    {
      key: '6',
      label: '项目经历',
      children:
        <FormListCreator
          name="projectList"
          config={config.projectList}
          value={state}
          onChange={handleChange}
        />

    },
    {
      key: '7',
      label: '更多信息',
      children:
        <FormListCreator
          name="awardList"
          config={config.awardList}
          value={state}
          onChange={handleChange}
        />
    },
  ]

  return (
    <Tabs tabPosition="left" defaultActiveKey="1" type="line" >
      <Tabs.TabPane tab="头像设置" key="1">
        <FormCreator
          config={config.avatar}
          name="avatar"
          value={state.avatar}
          onChange={handleChange}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="基本信息" key="2">
        <FormCreator
          config={config.profile}
          name="profile"
          value={state.profile}
          onChange={handleChange}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="教育背景" key="3">
        <FormListCreator
          name="educationList"
          config={config.educationList}
          value={state}
          onChange={handleChange}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="专业技能" key="4">
        <FormListCreator
          name="skillList"
          config={config.skillList}
          value={state}
          onChange={handleChange}
        />
      </Tabs.TabPane>

      <Tabs.TabPane tab="工作经历" key="6">
        <FormListCreator
          name="workExpList"
          config={config.workExpList}
          value={state}
          onChange={handleChange}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="项目经历" key="7">
        <FormListCreator
          name="projectList"
          config={config.projectList}
          value={state}
          onChange={handleChange}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="更多信息" key="5">
        <FormListCreator
          name="awardList"
          config={config.awardList}
          value={state}
          onChange={handleChange}
        />
      </Tabs.TabPane>
    </Tabs>
  )
}
