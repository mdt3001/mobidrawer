import { BoardState, boardType } from "@/lib/Zustand/type.type";

const boardAvatar = [
  "https://miro.com/app/images/application/icons/board_vis_230905/icon/board_icon_6.png?etag=20230906",
  "https://miro.com/app/images/application/icons/board_vis_230905/icon/board_icon_30.png?etag=20230906",
  "https://miro.com/app/images/application/icons/board_vis_230905/icon/board_icon_18.png?etag=20230906",
];

const createBoard = (type: boardType, id: number) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Thêm số 0 nếu cần
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  
  // Tạo chuỗi ngày giờ tùy chỉnh
  const customDate = `${year}-${month}-${day} ${hour}:00`;
  try {
    const response: BoardState = {
      id: id,
      name: `${type} ${id}`,
      lastOpened : customDate,
      description: `Đây là ${type} bảng đã được tạo tại${new Date().toISOString()}`,
      canvasPaths: [],
      thumbnail: boardAvatar[id % boardAvatar.length],
      type: type,
      options: {
        gird: true,
        backgroundColor: 'bg-slate-700',
      },
    };
    return response;
  } catch (error) {
    throw error;
  }
};

const BoardAPI = {
  createBoard,
};
export default BoardAPI;
