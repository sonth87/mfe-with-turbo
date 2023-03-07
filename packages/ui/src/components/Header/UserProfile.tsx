import { Dropdown, Space, Menu, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";

function UserProfile() {
  const menu = (
    <Menu
      className="ui-rounded-xl ui-w-64 ui-py-2 ui-mt-2"
      items={[
        {
          label: (
            <div className="ui-flex ui-py-1 ui-px-1">
              <img src="../../icons/user-profile.svg" alt="" />
              <span className="ui-text-sm ui-pl-2">Thông tin cá nhân</span>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div className="ui-flex ui-py-1 ui-px-1">
              <img src="../../icons/lock-alt.svg" alt="" />
              <span className="ui-text-sm ui-pl-2">Đổi mật khẩu</span>
            </div>
          ),
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <div className="ui-flex ui-py-1 ui-px-1">
              <img src="../../icons/log-out-circle.svg" alt="" />
              <span className="ui-text-sm ui-pl-2 ui-text-primaryb500 ui-font-medium">
                Đăng xuất
              </span>
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );

  return (
    <div className="ui-user-profile ui-flex ui-pl-4 ui-cursor-pointer">
      <Avatar className="ui-bg-sky-400 ui-my-auto ">S</Avatar>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        placement="bottomRight"
        className="ui-shadow-sd4"
      >
        <div
          className="ui-flex ui-my-auto ui-cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          <Space>
            <span className="ui-font-medium ui-text-black500 ui-my-auto ui-mx-2">
              Tong Huy Son
            </span>
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
    </div>
  );
}

export default UserProfile;
