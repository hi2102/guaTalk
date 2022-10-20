// sequelize 사용
const User = (Sequelize, DataTypes) => {
	const model = Sequelize.define(
		"userinfo",
		{
			id: {
				type: DataTypes.STRING(20), // 데이터 타입 정의
				allowNull: false, // NOT NULL 허용 여부 (dafault: true)
				primaryKey: true, // 기본키 설정 (dafault: false)
			},
			pw: {
				type: DataTypes.STRING(20), // name varchar(10)
				allowNull: false,
			},
			nick: {
				type: DataTypes.STRING(20), // comment mediumtext
				allowNull: false,
			},
		},
		{
			tableName: "userinfo",
			freezeTableName: true, // 테이블 이름 고정
			timestamps: false, // 등록된 시간, 수정된 시간을 찍어준다.
		}
	);
	return model;
};
module.exports = User;
